import React from 'react';
import styles from '../page.module.css';
import showToast from '../../../components/Toasts';

interface AuthSectionsProps {
  userToken: string;
  setUserToken: (token: string) => void;
  adminPasswordInput: string;
  setAdminPasswordInput: (password: string) => void;
  adminPassword: string;
  setShowAdvancedSettings: (show: boolean) => void;
}

export const AuthSections: React.FC<AuthSectionsProps> = ({
  userToken,
  setUserToken,
  adminPasswordInput,
  setAdminPasswordInput,
  adminPassword,
  setShowAdvancedSettings,
}) => {
  return (
    <>
      <div className={styles.section}>
        <h2 style={{ padding: '5px' }}>User Authentication</h2>
        <p style={{ padding: '5px' }}>
          Enter your user token to authenticate with the MyStream backend.
        </p>
        <div className={styles.setting}>
          <div className={styles.settingDescription}>
            <h3 style={{ padding: '5px' }}>User Token</h3>
          </div>
          <div className={styles.settingInput}>
            <input
              type="text"
              value={userToken}
              onChange={(e) => setUserToken(e.target.value)}
              placeholder="Enter your user token"
              className={styles.input}
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <h2 style={{ padding: '5px' }}>Admin Access</h2>
        <p style={{ padding: '5px' }}>
          Enter the admin password to unlock advanced configuration options.
        </p>
        <div className={styles.setting}>
          <div className={styles.settingDescription}>
            <h3 style={{ padding: '5px' }}>Admin Password</h3>
          </div>
          <div className={styles.settingInput}>
            <input
              type="password"
              value={adminPasswordInput}
              onChange={(e) => setAdminPasswordInput(e.target.value)}
              placeholder="Enter admin password"
              className={styles.input}
            />
          </div>
        </div>
        <button
          className={styles.installButton}
          onClick={() => {
            if (adminPasswordInput === adminPassword) {
              setShowAdvancedSettings(true);
              showToast('Advanced settings unlocked!', 'success');
            } else {
              showToast('Incorrect password', 'error');
            }
          }}
        >
          Unlock Advanced Settings
        </button>
      </div>
    </>
  );
};