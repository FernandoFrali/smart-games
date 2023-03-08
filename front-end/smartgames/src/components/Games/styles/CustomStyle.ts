import { ModalStyles } from '../Interfaces';

export const customStyles: ModalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#161313',
  },
  content: {
    maxHeight: 'calc(100vh - 210px)',
    overflowY: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    background: '#161313',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    display: 'grid',
    justifyItems: 'center',
    gap: '10px',
  },
};
