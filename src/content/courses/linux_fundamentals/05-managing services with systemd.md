# Managing Services with Systemd

When you run a script (like a Python/Flask app or a Node.js server) in your terminal, it stops running when you close the SSH session. To keep it running permanently in the background and restart it automatically if it crashes or the server reboots, you should use **Systemd**.

## 1. Create a Service File

Service files are stored in `/etc/systemd/system/`. Let's create one for a hypothetical Flask app.

```bash
sudo nano /etc/systemd/system/myapp.service
```

## 2. Define the Service

Paste the following content, adjusting paths and users:

```ini
[Unit]
Description=Gunicorn instance to serve myapp
After=network.target

[Service]
# The user that should run the app
User=ubuntu
# The group (usually the same as user)
Group=ubuntu
# The working directory of your project
WorkingDirectory=/home/ubuntu/myproject
# Environment variables (optional)
Environment="PATH=/home/ubuntu/myproject/venv/bin"
# The command to start your app
ExecStart=/home/ubuntu/myproject/venv/bin/gunicorn --workers 3 --bind unix:myapp.sock -m 007 wsgi:app
# Restart automatically if it crashes
Restart=always

[Install]
WantedBy=multi-user.target
```

### Key Fields:
- **User**: Important security practice. Don't run apps as root unless necessary.
- **WorkingDirectory**: Where your code lives.
- **ExecStart**: The exact command to run your app (full paths constitute best practice).
- **Restart=always**: A crucial setting for production reliability.

## 3. Start and Enable the Service

Reload Systemd to recognize the new file:
```bash
sudo systemctl daemon-reload
```

Start the service now:
```bash
sudo systemctl start myapp
```

Enable it to start automatically on boot:
```bash
sudo systemctl enable myapp
```

## 4. Managing the Service

Check status (logs, active state):
```bash
sudo systemctl status myapp
```

Restart the service (e.g., after a code update):
```bash
sudo systemctl restart myapp
```

Stop the service:
```bash
sudo systemctl stop myapp
```
