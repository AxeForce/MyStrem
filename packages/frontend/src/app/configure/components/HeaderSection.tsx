import React from 'react';
import Image from 'next/image';
import styles from '../page.module.css';

interface HeaderSectionProps {
  overrideName: string;
  setOverrideName: (name: string) => void;
  version: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  overrideName,
  setOverrideName,
  version,
}) => {
  return (
    <div className={styles.header}>
      <Image
        src="/assets/logo.png"
        alt="AIOStreams Logo"
        width={200}
        height={200}
        style={{ display: 'block', margin: '0 auto' }}
      />
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <input
          type="text"
          value={overrideName || 'AIOStreams'}
          onChange={(e) => setOverrideName(e.target.value)}
          style={{
            border: 'none',
            backgroundColor: 'black',
            color: 'white',
            fontWeight: 'bold',
            background: 'black',
            height: '30px',
            textAlign: 'center',
            fontSize: '30px',
            padding: '0',
            maxWidth: '300px',
            width: 'auto',
            margin: '0 auto',
          }}
          size={overrideName?.length < 8 ? 8 : overrideName?.length || 8}
        ></input>
        <span
          className={styles.version}
          title={`See what's new in v${version}`}
          onClick={() => {
            window.open(
              `https://github.com/Viren070/AIOStreams/releases/tag/v${version}`,
              '_blank',
              'noopener noreferrer'
            );
          }}
        >
          v{version}
        </span>
      </div>
      {process.env.NEXT_PUBLIC_BRANDING && (
        <div
          className={styles.branding}
          dangerouslySetInnerHTML={{
            __html: process.env.NEXT_PUBLIC_BRANDING || '',
          }}
        />
      )}
      <p style={{ textAlign: 'center', padding: '15px' }}>
        AIOStreams, the all-in-one streaming addon for Stremio. Combine your
        streams from all your addons into one and filter them by resolution,
        quality, visual tags and more.
        <br />
        <br />
        This addon will return any result from the addons you enable. These
        can be P2P results, direct links, or anything else. Results that are
        P2P are marked as P2P, however.
        <br />
        <br />
        This addon also has no persistence. Nothing you enter here is
        stored. They are encrypted within the manifest URL and are only used
        to retrieve streams from any addons you enable.
      </p>
      <p style={{ textAlign: 'center', padding: '15px' }}>
        <a
          href="https://guides.viren070.me/stremio/addons/aiostreams"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Configuration Guide
        </a>
        {' | '}
        <a
          href="https://github.com/Viren070/AIOStreams"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          GitHub
        </a>
        {' | '}
        <a
          href="https://guides.viren070.me/stremio"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: 'underline' }}
        >
          Stremio Guide
        </a>
      </p>
    </div>
  );
};