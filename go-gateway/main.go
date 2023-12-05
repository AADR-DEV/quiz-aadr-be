package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func getAll(w http.ResponseWriter, r *http.Request) {
  resp, _ := http.Get("http://localhost:8000/api/questions")
  
  data, _ := ioutil.ReadAll(resp.Body)
  
  var responseData map[string]interface{}
  
  if err := json.Unmarshal(data, &responseData); err != nil {
    http.Error(w, "Failed to decode JSON", http.StatusInternalServerError)
    return
  }

  defer resp.Body.Close()
  
  w.Header().Set("Content-Type", "application/json")
  json.NewEncoder(w).Encode(responseData)

}

func main() {
  router := http.NewServeMux()

  router.HandleFunc("/questions", getAll)

  fmt.Println("Server running on port 9000")
  http.ListenAndServe(":9000", router)
}