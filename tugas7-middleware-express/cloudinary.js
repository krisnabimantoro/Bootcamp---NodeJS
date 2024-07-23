const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: "dbot4jz71",
    api_key: "897539643389373",
    api_secret: "3B_09teXBspD49OxcI-gNCfqAS8", // Click 'View Credentials' below to copy your API secret
  });

module.exports = cloudinary;