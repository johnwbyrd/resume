# Automated Deployment & Configuration

This project includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) designed to automatically build the static site and deploy it via SSH to staging and production environments based on pushes to specific branches (`develop` for staging, `main` for production).

## Workflow Overview

1.  **Trigger:** The workflow runs on pushes to the `main` or `develop` branches.
2.  **Setup:** Checks out the code, sets up Node.js.
3.  **Build:** Installs dependencies (`npm install`) and builds the static site (`npm run build`). The output is typically in the `.next/` or `out/` directory depending on the exact Next.js configuration (check `next.config.js` if unsure, but the workflow uses `out/`).
4.  **Deploy:** Uses the `easing-themes/ssh-deploy` action to securely copy the built files (`out/`) to the target server specified by the GitHub Secrets.

## GitHub Secrets Configuration

To enable the automated deployment, you **must** configure the following secrets in your GitHub repository settings (**Settings → Secrets and Variables → Actions → Repository secrets**):

### Staging Environment

*   `STAGING_HOST`: The hostname or IP address of your staging server.
*   `STAGING_USER`: The SSH username used to connect to the staging server.
*   `STAGING_SSH_KEY`: The **private** SSH key that corresponds to a public key added to the staging server's `~/.ssh/authorized_keys` file for the `STAGING_USER`.
*   `STAGING_PATH`: The **absolute path** on the staging server where the contents of the `out/` directory should be deployed (e.g., `/var/www/staging/html`).

### Production Environment

*   `PRODUCTION_HOST`: The hostname or IP address of your production server.
*   `PRODUCTION_USER`: The SSH username used to connect to the production server.
*   `PRODUCTION_SSH_KEY`: The **private** SSH key corresponding to an authorized public key on the production server for the `PRODUCTION_USER`.
*   `PRODUCTION_PATH`: The **absolute path** on the production server for deployment (e.g., `/var/www/production/html`).

**Important Security Notes:**

*   **NEVER** commit private SSH keys directly to your repository.
*   Use dedicated SSH keys for deployment if possible, not your personal keys.
*   Ensure the user specified (`STAGING_USER`, `PRODUCTION_USER`) has the necessary write permissions for the target deployment path on the respective servers.
*   Make sure the exact secret names listed above are used when adding them to GitHub Actions secrets. 