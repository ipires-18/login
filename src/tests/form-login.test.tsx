import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { FormLogin } from '../components/form-login';
import React from 'react';

vi.mock('../hooks/useLogin', () => ({
  useLogin: () => ({
    loginMessage: '',
    setEmail: vi.fn(),
    setPassword: vi.fn(),
    email: '',
    password: '',
    handleSubmit: vi.fn((e) => e.preventDefault())
  })
}));

describe('FormLogin', () => {
  it('deve renderizar o formulário corretamente', () => {
   const {getByPlaceholderText, getByRole} =  render(<FormLogin />);

    expect(getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(getByRole('button', { name: /Entrar/i })).toBeInTheDocument();
  });

  it('deve exibir a mensagem de erro quando loginMessage estiver presente', () => {
    vi.mock('../hooks/useLogin', () => ({
      useLogin: () => ({
        loginMessage: 'Mensagem de erro',
        setEmail: vi.fn(),
        setPassword: vi.fn(),
        email: '',
        password: '',
        handleSubmit: vi.fn((e) => e.preventDefault())
      })
    }));

    render(<FormLogin />);

    expect(screen.getByText('Mensagem de erro')).toBeInTheDocument();
  });
});
