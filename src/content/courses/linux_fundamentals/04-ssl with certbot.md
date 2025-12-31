# Configuring SSL with Certbot

Securing your website with HTTPS is standard practice. Certbot provides a free, automated way to obtain and renew SSL certificates from Let's Encrypt.

## Prerequisites

- An Nginx server block already configured and working for your domain (on port 80).
- A valid domain name pointing to your server's IP.

## 1. Install Certbot

On Ubuntu/Debian:

```bash
sudo apt update
sudo apt install certbot python3-certbot-nginx
```

## 2. Obtain the Certificate

Run Certbot with the Nginx plugin. It will read your existing Nginx config and automatically set up SSL.

```bash
sudo certbot --nginx -d myapp.com -d www.myapp.com
```

## 3. The Interactive Process

1.  **Email Address**: Enter your email for urgent renewal and security notices.
2.  **Terms of Service**: Agree to the terms.
3.  **Redirect**: Certbot will ask if you want to redirect HTTP traffic to HTTPS.
    - Select **2** (Redirect) for the most secure option.

## 4. Automatic Renewal

Let's Encrypt certificates are valid for 90 days. Certbot installs a timer to check for renewal automatically twice a day.

You can verify the auto-renewal process with a dry run:

```bash
sudo certbot renew --dry-run
```

If this command completes without errors, your SSL certificates will renew automatically in the background.

## What changed?

Certbot modifies your Nginx config file (`/etc/nginx/sites-available/myapp.com`) to listen on port 443 (HTTPS) and adds the paths to your new SSL certificates.
