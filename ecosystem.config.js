require("dotenv").config({ path: "/var/www/things/.env" });

module.exports = {
  apps: [
    {
      name: "things",
      cwd: "/var/www/things/apps/web",
      script: "pnpm",
      args: "start",
      node_args: "",                       // no extra flags
      env: {
        NODE_ENV: "production"
      },
      interpreter: "/home/csanad/.nvm/versions/node/v20.19.2/bin/node",

      env: { ...process.env, NODE_ENV: "production" },

      autorestart: true,
      watch: false,
      max_restarts: 10,
      out_file: "/var/log/things/out.log",
      error_file: "/var/log/things/err.log",
    }
  ]
};
