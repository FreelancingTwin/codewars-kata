Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"

function domainName(url){
  //given is a stirng, isn't empty, no ints, all lowerCase
  //return site name, 
  //"http://google.com"), "google");
//   "http://google.co.jp"), "google");
//   www.xakep.ru"), "xakep");
//   split the starting parts / extract the second el
  return url.replace('http://', '')
            .replace('https://', '')
            .replace('www.', '')
            .split('.')[0]
  
}