"use server";
import axios from "axios";
import fs from "fs";
import path from "path";

export async function getData() {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    return data;
  } catch (error) {
    return null;
  }
}
export async function getApiSecret() {
  try {
    const filePath = path.join(process.cwd(), "public", "data.json");
    const fileData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(fileData);
    return data.api_secret;
  } catch (error) {
    return null;
  }
}

export async function getImage() {
  try {
    const secret = await getApiSecret();
    const res = await axios.post(
      "https://testd5-img.azurewebsites.net/api/imgdownload",
      {
        api: secret,
      }
    );
    const data = res.data;
    return data.base64_string;
  } catch (error) {
    console.log(error);
    return null;
  }
}
