Complete the function/method so that it returns the url with anything after the anchor (#) removed.
Examples

"www.codewars.com#about" --> "www.codewars.com"
"www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
  // url is a string, case insensitive
  //return url without # el
  //www.codewars.com#about" --> "www.codewars.com"
  //use replace, use split
  return url.split('#')[0]
  //alt answer, a bit less readable;
  return url.replace(/#.*/gi, '');
}