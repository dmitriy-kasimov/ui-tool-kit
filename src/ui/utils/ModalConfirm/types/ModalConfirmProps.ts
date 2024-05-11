export interface ModalConfirmProps{
    isOpen: boolean;
    onClose: () => void;

    onConfirm: () => void;

    title?: string;
    children: React.ReactNode;

    lazy?: boolean;
    className?: string;
    portalElement?: HTMLElement;
}