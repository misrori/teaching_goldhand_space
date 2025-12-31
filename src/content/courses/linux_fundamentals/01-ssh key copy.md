# SSH Key Copying Guide

Secure Shell (SSH) keys provide a more secure way of logging into a virtual private server with SSH than using a password alone. This guide covers how to generate an SSH key pair and copy the public key to your server.

## 1. Check for Existing Keys

Before generating a new key pair, check if you already have one:

```bash
ls -al ~/.ssh
```

Look for files ending in `.pub` (e.g., `id_rsa.pub`, `id_ed25519.pub`).

## 2. Generate a New SSH Key

If you don't have a key or want a new one, generate it using the terminal:

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
```

- **-t ed25519**: Specifies the key type (Ed25519 is recommended for security and performance).
- **-C**: Adds a label (comment) to the key.

Press `Enter` to accept the default file location. You can opt to set a passphrase for extra security.

## 3. Copy the Public Key to the Server

There are two main ways to copy your public key to the remote server.

### Method A: Using `ssh-copy-id` (Recommended)

The easiest method is to use the `ssh-copy-id` utility.

```bash
ssh-copy-id username@remote_host
```

Example:
```bash
ssh-copy-id root@192.168.1.50
```

You will be asked for the remote account's password one last time.

### Method B: Manual Copy

If `ssh-copy-id` is not available, you can output the key and pipe it to SSH:

```bash
cat ~/.ssh/id_ed25519.pub | ssh username@remote_host "mkdir -p ~/.ssh && chmod 700 ~/.ssh && cat >> ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys"
```

This command:
1. Reads your public key.
2. Connects to the server.
3. Ensures the `.ssh` directory exists with correct permissions (700).
4. Appends your key to `authorized_keys`.
5. Sets strictly secure permissions (600) on the `authorized_keys` file.

## 4. Test the Connection

Now, try logging in:

```bash
ssh username@remote_host
```

You should be logged in without being asked for a password (unless you set a passphrase for the key itself).

## Troubleshooting Permissions

If you can't log in, check permissions on the server:

```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

SSH is very strict about file permissions; if they are too open, the server will refuse to use the keys.
