class PortalTelemedicinaComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://hml-sso-renaper.dpsit.gba.gob.ar/login/T3L3M301C1N4BOQ');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('height', '600px');
    iframe.setAttribute('frameborder', '0');

    shadow.appendChild(iframe);
  }
}

// Define el nombre del componente y registra el Web Component
customElements.define('portal-telemedicina-component', PortalTelemedicinaComponent);
