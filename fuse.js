const { FuseBox, HTMLPlugin, WebIndexPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src",
  output: "dist/$name.js"
});

fuse.dev({ port: 4445, httpServer: false });

process.env.DEBUG = 'server:*';

fuse
  .bundle("server/bundle")
  .watch("server/**")
  .instructions(" > [server/app.ts]")
  .completed(proc => proc.start());

/*
fuse
  .bundle("client/app")
  .watch("client/**")
  .hmr()
  .instructions(" > client/index.ts");
*/

fuse.run();
