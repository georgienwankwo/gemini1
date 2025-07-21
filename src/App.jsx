import { useState } from 'react';
import './App.css';
import Header from './components/header';
import ExtensionButton from './components/ExtensionButton';
import Extension from './components/Extension';
import { useThemeContext } from './context/themeContext';

export default function App() {
  const { themeMode } = useThemeContext();
  const [style, setStyle] = useState('all');

  function handleStyle(options) {
    setStyle(options);
  }

  return (
    <div
      className={`body--section-container ${themeMode === 'light' ? 'root_background_light' : 'root_background_dark'}`}
    >
      <div className='body--section'>
        <Header />
        <div className='extension--section'>
          <h2
            className={`extension__head ${themeMode === 'light' ? 'light-theme-mode' : 'dark-theme-mode'}`}
          >
            Extensions List
          </h2>
          <div className='extension__menu'>
            {
              <ExtensionButton
                isSelected={style === 'all'}
                onSelect={() => handleStyle('all')}
              >
                All
              </ExtensionButton>
            }
            <ExtensionButton
              isSelected={style === 'active'}
              onSelect={() => handleStyle('active')}
            >
              Active
            </ExtensionButton>
            <ExtensionButton
              isSelected={style === 'inactive'}
              onSelect={() => handleStyle('inactive')}
            >
              Inactive
            </ExtensionButton>
          </div>
        </div>
        <Extension />
      </div>
    </div>
  );
}
