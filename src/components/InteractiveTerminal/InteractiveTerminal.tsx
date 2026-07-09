import React, { useState, useRef, useEffect } from 'react';
import { Box, Container } from '@mui/material';
import './InteractiveTerminal.css';
import { portfolioData } from '../../portfolioData';

type HistoryItem = {
  command: string;
  output: React.ReactNode;
};

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      command: '',
      output: <span>Welcome to the interactive terminal. Type <strong style={{color: '#27C93F'}}>help</strong> to see available commands.</span>
    }
  ]);
  const [input, setInput] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleContainerClick = () => {
    inputRef.current?.focus();
  };

  const processCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === 'clear') {
      setHistory([]);
      return;
    }

    let output: React.ReactNode = '';

    switch (trimmedCmd) {
      case 'help':
        output = (
          <div>
            <div>Available commands:</div>
            <div style={{ marginLeft: 16, marginTop: 4 }}>
              <span style={{ color: '#27C93F', width: 80, display: 'inline-block' }}>whoami</span> - Display biography<br />
              <span style={{ color: '#27C93F', width: 80, display: 'inline-block' }}>skills</span> - List technical skills<br />
              <span style={{ color: '#27C93F', width: 80, display: 'inline-block' }}>contact</span> - Show contact information<br />
              <span style={{ color: '#27C93F', width: 80, display: 'inline-block' }}>clear</span> - Clear the terminal<br />
              <span style={{ color: '#27C93F', width: 80, display: 'inline-block' }}>sudo</span> - Execute a command as superuser
            </div>
          </div>
        );
        break;
      case 'whoami':
        output = (
          <div>
            <strong style={{ color: '#EDEDED' }}>{portfolioData.greeting.full_name}</strong><br />
            {portfolioData.greeting.subTitle}<br /><br />
            {portfolioData.experience.description}
          </div>
        );
        break;
      case 'skills':
        output = (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {portfolioData.skills.data.map(cat => (
              <div key={cat.title}>
                <strong style={{ color: '#61DAFB' }}>[{cat.title}]</strong><br />
                {cat.softwareSkills.map(s => s.skillName).join(', ')}
              </div>
            ))}
          </div>
        );
        break;
      case 'contact':
        output = (
          <div>
            Email: <a href={portfolioData.greeting.mail} style={{ color: '#61DAFB' }}>{portfolioData.socialMediaLinks.gmail}</a><br />
            LinkedIn: <a href={portfolioData.socialMediaLinks.linkedin} target="_blank" rel="noreferrer" style={{ color: '#61DAFB' }}>View Profile</a><br />
            GitHub: <a href={portfolioData.socialMediaLinks.github} target="_blank" rel="noreferrer" style={{ color: '#61DAFB' }}>View GitHub</a>
          </div>
        );
        break;
      case 'sudo':
        output = <span style={{ color: '#FF5F56' }}>guest is not in the sudoers file. This incident will be reported.</span>;
        break;
      case '':
        output = '';
        break;
      default:
        if (trimmedCmd.startsWith('sudo ')) {
          output = <span style={{ color: '#FF5F56' }}>Nice try, but you don't have root privileges here!</span>;
        } else {
          output = <span>Command not found: {trimmedCmd}. Type <strong style={{color: '#EDEDED'}}>help</strong> for a list of commands.</span>;
        }
    }

    setHistory(prev => [...prev, { command: cmd, output }]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(input);
      setInput('');
    }
  };

  return (
    <Box sx={{ py: { xs: 4, md: 8 } }}>
      <Container maxWidth="lg">
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <div className="terminal-button close"></div>
              <div className="terminal-button minimize"></div>
              <div className="terminal-button maximize"></div>
            </div>
            <div className="terminal-title">guest@portfolio: ~</div>
          </div>
          <div className="terminal-body" ref={containerRef} onClick={handleContainerClick}>
            {history.map((item, index) => (
              <div key={index} className="terminal-line">
                {item.command !== undefined && item.command !== '' && (
                  <div>
                    <span className="terminal-prompt">guest@portfolio:~$</span>
                    <span className="terminal-command">{item.command}</span>
                  </div>
                )}
                {item.output && <div className="terminal-output">{item.output}</div>}
              </div>
            ))}
            
            <div className="terminal-input-line">
              <span className="terminal-prompt">guest@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                className="terminal-input"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                spellCheck={false}
                autoFocus
                aria-label="Terminal input"
              />
            </div>
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default InteractiveTerminal;
