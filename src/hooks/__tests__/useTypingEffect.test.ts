import { describe, it, expect, vi } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTypingEffect } from '../useTypingEffect';

describe('useTypingEffect', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts with empty text', () => {
    const { result } = renderHook(() => useTypingEffect('Hello', 50, 100));
    expect(result.current.displayedText).toBe('');
    expect(result.current.isComplete).toBe(false);
  });

  it('completes the full text eventually', () => {
    const text = 'Hi';
    const { result } = renderHook(() => useTypingEffect(text, 50, 0));

    // Advance enough time for all characters + start delay
    act(() => { vi.advanceTimersByTime(500); });
    expect(result.current.displayedText).toBe(text);
    expect(result.current.isComplete).toBe(true);
  });

  it('types progressively — not all at once', () => {
    const text = 'ABCDEF';
    const { result } = renderHook(() => useTypingEffect(text, 100, 0));

    // After start delay fires, first char appears
    act(() => { vi.advanceTimersByTime(0); });

    // After 200ms more, should have some but not all
    act(() => { vi.advanceTimersByTime(200); });
    const partial = result.current.displayedText;
    expect(partial.length).toBeGreaterThan(0);
    expect(partial.length).toBeLessThan(text.length);

    // Finish it
    act(() => { vi.advanceTimersByTime(2000); });
    expect(result.current.displayedText).toBe(text);
  });
});
