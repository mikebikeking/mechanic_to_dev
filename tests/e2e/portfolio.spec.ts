import { test, expect } from '@playwright/test';

test.describe('Portfolio Website', () => {
  test('should load the homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check if the main heading is visible
    await expect(page.getByText('PRECISION ENGINEERING MEETS CODE')).toBeVisible();
    
    // Check if navigation is present
    await expect(page.getByRole('navigation')).toBeVisible();
  });

  test('should navigate to different sections', async ({ page }) => {
    await page.goto('/');
    
    // Click on About section
    await page.getByRole('button', { name: 'About' }).click();
    
    // Wait for smooth scroll and check if About section is visible
    await expect(page.locator('#about')).toBeInViewport();
  });

  test('should have responsive design', async ({ page }) => {
    await page.goto('/');
    
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Check if mobile menu button is visible
    await expect(page.getByRole('button', { name: '' })).toBeVisible();
  });

  test('should load projects section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to projects section
    await page.getByRole('button', { name: 'Projects' }).click();
    await expect(page.locator('#projects')).toBeInViewport();
    
    // Check if project cards are loaded
    await expect(page.getByText('Portfolio Website')).toBeVisible();
  });

  test('should have working contact form', async ({ page }) => {
    await page.goto('/');
    
    // Navigate to contact section
    await page.getByRole('button', { name: 'Contact' }).click();
    await expect(page.locator('#contact')).toBeInViewport();
    
    // Check if form elements are present
    await expect(page.getByLabel('NAME')).toBeVisible();
    await expect(page.getByLabel('EMAIL')).toBeVisible();
    await expect(page.getByLabel('MESSAGE')).toBeVisible();
  });
});
