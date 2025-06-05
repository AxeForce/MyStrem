import React from 'react';
import styles from '../page.module.css';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { toastOptions } from '../../../components/Toasts';
import InstallWindow from '../../../components/InstallWindow';

interface InstallButtonsProps {
  disableButtons: boolean;
  handleGenerateManifestUrl: () => Promise<void>;
  manifestUrl: string | null;
  setManifestUrl: (url: string | null) => void;
}

export const InstallButtons: React.FC<InstallButtonsProps> = ({
  disableButtons,
  handleGenerateManifestUrl,
  manifestUrl,
  setManifestUrl,
}) => {
  return (
    <div className={styles.installButtons}>
      <button
        className={styles.installButton}
        disabled={disableButtons}
        onClick={handleGenerateManifestUrl}
      >
        Generate Manifest URL
      </button>
      <InstallWindow
        manifestUrl={manifestUrl}
        setManifestUrl={setManifestUrl}
      />
      <ToastContainer
        stacked
        position="top-center"
        transition={Slide}
        draggablePercent={30}
      />
    </div>
  );
};