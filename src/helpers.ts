export function handleRedirect(url: string) {
    window.open(url); 
  }

export function handleScrollTop() {
    window.scroll({
    top: 0,
    behavior: 'smooth'
    });
}