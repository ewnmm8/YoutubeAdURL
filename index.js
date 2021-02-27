const YOUTUBE_URL = "https://www.youtube.com/watch?v="
let textarea = document.getElementsByTagName("textarea")[0]
let output_element = document.getElementById("ad_url")
let parse = JSON.parse('{"hoge":""}')

let setURL = function() {
  let parse = JSON.parse(textarea.value)
  let ad_url = YOUTUBE_URL
  ad_url += parse["addocid"] || parse["docid"]
  output_element.innerHTML = ad_url
  output_element.href = ad_url
}

textarea.onfocus = function() {
  this.value = ""
}
textarea.onpaste = function() {
  setTimeout(setURL, 500)
}