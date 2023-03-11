const urlPattern =
  /^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;

const url = "https://pwskills.com/";

if (urlPattern.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
