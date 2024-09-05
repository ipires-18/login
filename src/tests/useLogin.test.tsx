import { renderHook, act } from '@testing-library/react-hooks';
import { useLogin } from '../hooks/useLogin';
import { describe, it, expect, vi } from 'vitest';

const createMockResponse = (ok, json) => {
  return Object.assign(new Response(), {
    ok,
    json,
    status: ok ? 200 : 400,
    statusText: ok ? 'OK' : 'Bad Request',
  });
};

describe('useLogin', () => {
  it('deve inicializar com valores padrão', () => {
    const { result } = renderHook(() => useLogin());

    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.loginMessage).toBe('');
  });

  it('deve definir a mensagem de erro se o e-mail for inválido', async () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setEmail('invalid-email');
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} });
    });

    expect(result.current.loginMessage).toBe('Por favor, insira um e-mail válido.');
  });

  it('deve definir a mensagem de erro se ocorrer uma exceção', async () => {
    global.fetch = vi.fn(() => Promise.reject(new Error('Erro de rede')));

    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.setEmail('test@example.com');
      result.current.setPassword('password');
    });

    await act(async () => {
      await result.current.handleSubmit({ preventDefault: () => {} });
    });

    expect(result.current.loginMessage).toBe('Ocorreu um erro.');
  });
});
