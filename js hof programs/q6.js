var linkedin =
  /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

const url = "https://www.linkedin.com/in/vikrant-ruhela/";

if (linkedin.test(url)) {
  console.log("Valid URL");
} else {
  console.log("Invalid URL");
}
