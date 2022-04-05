/* eslint-disable import/no-anonymous-default-export */
import fs from "fs";
import path from "path";

export default (req, res) => {
  const dirRelativeToPublicFolder = `images/`;
  const dir = path.resolve("./public", dirRelativeToPublicFolder);
  const filenames = fs.readdirSync(dir);

  const subdirectories = filenames.map((name) =>
    path.join("/", dirRelativeToPublicFolder, name)
  );

  const filesWithinSubdirectories = {};

  subdirectories.map((directory) => {
    const dirname = directory.split("\\").pop();
    filesWithinSubdirectories[dirname] = fs
      .readdirSync(`./public/${directory}`)
      .map((name) => `.${directory}/${name}`);
  });

  res.statusCode = 200;
  res.json(filesWithinSubdirectories);
};
