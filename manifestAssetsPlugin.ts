import fs from "fs";
import path from "path";
import { Plugin } from "vite";

const manifestAssetsPlugin = (): Plugin => {
  return {
    name: "vite-plugin-manifest-assets",
    async writeBundle() {
      const manifestPath = path.resolve("./src/assets/manifest.json");
      const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf-8"));

      const assetsToCopy = [...(manifest.icons || []), ...(manifest.screenshots || [])];

      for (const asset of assetsToCopy) {
        const assetFileName = asset.src.replace(".", "");
        const sourcePath = path.resolve(__dirname, `src/assets${assetFileName}`);
        const destPath = path.resolve(__dirname, `dist/assets${assetFileName}`);

        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        fs.copyFileSync(sourcePath, destPath);

        console.log(`Copied ${sourcePath} to ${destPath}`);
      }
    },
  };
};

export { manifestAssetsPlugin };
