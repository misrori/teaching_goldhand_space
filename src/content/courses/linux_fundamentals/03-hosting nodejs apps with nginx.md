# Hosting Node.js Apps with Nginx

This guide explains how to host a web application (like a Node.js app) on a Virtual Private Server (VPS) and expose it to the internet using Nginx as a reverse proxy.

## Prerequisites

- A VPS running Linux (Ubuntu/Debian recommended).
- A Node.js application running on a specific port (e.g., 3000).
- Nginx installed (`sudo apt install nginx`).

## 1. Concept: Reverse Proxy

Node.js is great for running application logic, but it's not designed to be a robust, public-facing web server for serving static files or handling SSL directly.

**Nginx** sits in front of your Node app. It listens on port 80 (HTTP) and 443 (HTTPS), receives traffic from the world, and passes it to your Node app on localhost:3000.

## 2. Basic Nginx Configuration

Create a configuration file for your site in `/etc/nginx/sites-available/`.

```bash
sudo nano /etc/nginx/sites-available/myapp.com
```

Paste the following configuration:

```nginx
server {
    listen 80;
    server_name teaching.goldhand.space;

    root /var/www/teaching;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 3. Enable the Site

Link the file to the `sites-enabled` directory:

```bash
sudo ln -s /etc/nginx/sites-available/myapp.com /etc/nginx/sites-enabled/
```

## 4. Test and Reload

Test your configuration for syntax errors:

```bash
sudo nginx -t
```

If successful, restart Nginx:

```bash
sudo systemctl restart nginx
```

Now, when users visit `http://myapp.com`, Nginx will serve them content from your Node.js application running privately on port 3000.
