// Types
// Libraries
import path = require("path");
import { DownloaderHelper, FinalDownloadInfo } from "node-downloader-helper";
import { SingleBar, Presets } from "cli-progress";


export async function download(url: string): Promise<FinalDownloadInfo> {

  return new Promise(resolve => {

    const bar = new SingleBar({}, Presets.shades_classic);
    const downloader = new DownloaderHelper(url, __dirname);
    downloader
      .on("download", () => bar.start(100, 0))
      .on("end", result => {
        bar.stop();
        resolve(result);
      })
      .on("progress", stats => {
        const { progress } = stats;
        bar.update(Math.floor(progress));
      })
    ;

    downloader.start();
  });

}
