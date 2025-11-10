import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';

const Backdrop = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  z-index: 1000;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  width: 100%;
  max-width: 520px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 60px rgba(47, 84, 131, 0.25);
  overflow: hidden;
  border: 1px solid rgba(47, 84, 131, 0.08);
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1.5rem;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: #ffffff;
  position: relative;
`;

const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1.3;
`;

const ModalSubtitle = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.5;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
  }
`;

const ModalBody = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.9rem;
  font-weight: 600;
  color: #2f5483;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Input = styled.input`
  padding: 0.95rem 1.1rem;
  border-radius: 12px;
  border: 1px solid rgba(47, 84, 131, 0.25);
  font-size: 1rem;
  color: #2f5483;
  transition: all 0.2s ease;

  &::placeholder {
    color: rgba(47, 84, 131, 0.45);
  }

  &:focus {
    outline: none;
    border-color: #2f5483;
    box-shadow: 0 0 0 4px rgba(47, 84, 131, 0.1);
  }
`;

const ProductHint = styled.div`
  background: rgba(47, 84, 131, 0.08);
  border: 1px dashed rgba(47, 84, 131, 0.4);
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 0.95rem;
  color: #2f5483;
  line-height: 1.4;
`;

const SubmitButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border: none;
  background: linear-gradient(135deg, #2f5483 0%, #1e3a5f 100%);
  color: #ffffff;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 12px 30px rgba(47, 84, 131, 0.35);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
`;

const ErrorText = styled.p`
  margin: -0.25rem 0 0;
  font-size: 0.85rem;
  color: #dc3545;
`;

const initialState = {
  name: '',
  phone: ''
};

function RequestQuoteModal({ isOpen, productName, onClose, onSubmit }) {
  const [formValues, setFormValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setFormValues(initialState);
      setErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  }, []);

  const validate = useCallback(() => {
    const nextErrors = {};
    if (!formValues.name.trim()) {
      nextErrors.name = 'Введите ваше имя';
    }
    if (!formValues.phone.trim()) {
      nextErrors.phone = 'Укажите номер телефона';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }, [formValues]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }

    if (onSubmit) {
      onSubmit({
        name: formValues.name.trim(),
        phone: formValues.phone.trim(),
        productName
      });
    }
  }, [formValues, onSubmit, productName, validate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Backdrop
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <ModalContainer
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(event) => event.stopPropagation()}
          >
            <ModalHeader>
              <ModalTitle>Запросить предложение</ModalTitle>
              <ModalSubtitle>
                Оставьте свои контакты, и мы свяжемся с вами, чтобы обсудить условия по товару{productName ? ` «${productName}»` : ''}.
              </ModalSubtitle>
              <CloseButton type="button" onClick={onClose} aria-label="Закрыть">
                <FontAwesomeIcon icon={faTimes} />
              </CloseButton>
            </ModalHeader>

            <ModalBody onSubmit={handleSubmit}>
              {productName && (
                <ProductHint>
                  <strong>Товар:</strong> {productName}
                </ProductHint>
              )}

              <InputGroup>
                <Label htmlFor="quote-name">Ваше имя *</Label>
                <Input
                  id="quote-name"
                  name="name"
                  type="text"
                  placeholder="Иван Иванов"
                  value={formValues.name}
                  onChange={handleChange}
                  autoComplete="name"
                />
                {errors.name && <ErrorText>{errors.name}</ErrorText>}
              </InputGroup>

              <InputGroup>
                <Label htmlFor="quote-phone">Телефон *</Label>
                <Input
                  id="quote-phone"
                  name="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  value={formValues.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
                {errors.phone && <ErrorText>{errors.phone}</ErrorText>}
              </InputGroup>

              <SubmitButton
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Отправить заявку
              </SubmitButton>
            </ModalBody>
          </ModalContainer>
        </Backdrop>
      )}
    </AnimatePresence>
  );
}

export default RequestQuoteModal;

