# Linux Basic Commands

Mastering the command line is essential for any Linux user. Here are the fundamental commands you'll use daily to navigate and manage your system.

## Navigation

- **`pwd`** (Print Working Directory): Shows the full path of the current directory you are in.
  ```bash
  pwd
  ```

- **`ls`** (List): Lists files and directories in the current location.
  - `ls -l`: Detailed list (permissions, size, owner).
  - `ls -a`: Show hidden files (starting with `.`).
  ```bash
  ls -la
  ```

- **`cd`** (Change Directory): Moves you to a different directory.
  - `cd /var/www`: Go to `/var/www`.
  - `cd ..`: Go up one level.
  - `cd ~`: Go to your home directory.

## File Operations

- **`mkdir`** (Make Directory): Creates a new folder.
  ```bash
  mkdir new_folder
  ```

- **`touch`**: Creates an empty file or updates the timestamp of an existing one.
  ```bash
  touch index.html
  ```

- **`cp`** (Copy): Copies files or directories.
  - `cp file.txt backup.txt`: Copy a file.
  - `cp -r folder1 folder2`: Copy a directory recursively.

- **`mv`** (Move): Moves or renames files.
  - `mv file.txt new_location/`: Move.
  - `mv oldname.txt newname.txt`: Rename.

- **`rm`** (Remove): Deletes files. **Be careful, this is permanent!**
  - `rm file.txt`: Delete a file.
  - `rm -r folder`: Delete a folder and its contents.

## Viewing Content

- **`cat`**: Displays the entire content of a file.
  ```bash
  cat config.json
  ```

- **`less`**: View large files one page at a time. Press `q` to quit.
  ```bash
  less /var/log/syslog
  ```

- **`head` / `tail`**: View the beginning or end of a file.
  - `tail -f /var/log/nginx/access.log`: Watch a log file update in real-time.

## System Info

- **`top` / `htop`**: Show running processes and resource usage.
- **`df -h`**: Check disk space usage.
- **`free -m`**: Check memory (RAM) usage.

## Privileges

- **`sudo`** (SuperUser DO): Execute a command with administrative (root) privileges.
  ```bash
  sudo apt update
  ```
