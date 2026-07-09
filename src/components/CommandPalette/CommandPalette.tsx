import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { useNavigate } from 'react-router';
import { useTheme } from '@mui/material/styles';
import { portfolioData } from '../../portfolioData';
import { Icon } from '@iconify-icon/react';
import './CommandPalette.css';

interface CommandPaletteProps {
  setTheme: () => void;
}

export default function CommandPalette({ setTheme }: CommandPaletteProps) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    
    const customToggle = () => setOpen(true);

    document.addEventListener('keydown', down);
    window.addEventListener('open-command-palette', customToggle);
    return () => {
      document.removeEventListener('keydown', down);
      window.removeEventListener('open-command-palette', customToggle);
    };
  }, []);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  return (
    <Command.Dialog open={open} onOpenChange={setOpen} label="Global Command Menu" className={theme.palette.mode}>
      <Command.Input placeholder="Type a command or search..." />
      <Command.List>
        <Command.Empty>No results found.</Command.Empty>

        <Command.Group heading="Navigation">
          <Command.Item onSelect={() => runCommand(() => navigate('/'))}>
            <Icon icon="lucide:home" /> Home
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => navigate('/experience'))}>
            <Icon icon="lucide:briefcase" /> Experience
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => navigate('/projects'))}>
            <Icon icon="lucide:folder" /> Projects
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => navigate('/education'))}>
            <Icon icon="lucide:graduation-cap" /> Education
          </Command.Item>
          {portfolioData.writing && portfolioData.writing.length > 0 && (
            <Command.Item onSelect={() => runCommand(() => navigate('/writing'))}>
              <Icon icon="lucide:pen-tool" /> Writing
            </Command.Item>
          )}
          <Command.Item onSelect={() => runCommand(() => navigate('/contact'))}>
            <Icon icon="lucide:mail" /> Contact
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Social & Links">
          <Command.Item onSelect={() => runCommand(() => window.open(portfolioData.greeting.resumeLink, '_blank', 'noopener,noreferrer'))}>
            <Icon icon="lucide:file-text" /> Resume
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => window.open(portfolioData.socialMediaLinks.github, '_blank', 'noopener,noreferrer'))}>
            <Icon icon="lucide:github" /> GitHub
          </Command.Item>
          <Command.Item onSelect={() => runCommand(() => window.open(portfolioData.socialMediaLinks.linkedin, '_blank', 'noopener,noreferrer'))}>
            <Icon icon="lucide:linkedin" /> LinkedIn
          </Command.Item>
        </Command.Group>

        <Command.Group heading="Settings">
          <Command.Item onSelect={() => runCommand(() => setTheme())}>
            <Icon icon="lucide:moon" /> Toggle Theme
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
