# Astron Social

**Astron Social** is an open-source, ethical, and self-hostable social network designed to offer a free and decentralized alternative to mainstream platforms.  
It puts **privacy**, **data sovereignty**, and **community** at the center of its mission.

---

## 🚀 Key Features

- 🧑‍🤝‍🧑 Customizable user profiles  
- 📢 Chronological news feed  
- 💬 Private messaging system  
- 📸 Share images, links, and posts  
- 🔐 Fully self-hostable, AGPLv3 compliant  
- ⚙️ Developer-friendly REST API

---

## 🔧 Local Deployment

### 🐳 Method 1: Using Docker (Recommended)

#### Prerequisites

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

#### Launch the application

```bash
git clone https://github.com/Sky-Genesis-Enterprise/astron-social.git
cd astron-social
docker-compose up -d
````

The app will be accessible at [http://localhost:3000](http://localhost:3000)

---

### 🖥️ Method 2: Manual installation via script

#### On Linux / macOS

```bash
git clone https://github.com/Sky-Genesis-Enterprise/astron-social.git
cd astron-social
chmod +x install.sh
./install.sh
```

#### On Windows

Download and double-click on `install.bat` (or run from a PowerShell terminal):

```bat
install.bat
```

---

## 🛠️ Project Structure

```
astron-social/
├── backend/          # API and server-side logic
├── frontend/         # User interface (React, etc.)
├── scripts/          # Installation and utility scripts
├── docker/           # Docker configurations
├── .env.example      # Example environment variables
├── install.sh        # Linux/macOS setup script
├── install.bat       # Windows setup script
```

---

## 🤝 Contributing

We warmly welcome community contributions!
To contribute:

1. Fork the repository
2. Clone it locally
3. Create a new branch: `feature/your-feature-name`
4. Make your changes
5. Submit a Pull Request (PR)

👉 Check the [`CONTRIBUTING.md`](./CONTRIBUTING.md) file for full guidelines.

---

## 📩 Contact

For questions, partnerships, or professional support:
📧 [contact@skygenesisenterprise.com](mailto:contact@skygenesisenterprise.com)

---

> Proudly developed by [Sky Genesis Enterprise](https://skygenesisenterprise.com)

## 📜 License

Astron Social is released under the **[AGPLv3 License](https://www.gnu.org/licenses/agpl-3.0.html)**.
A commercial license is available for proprietary or business use.