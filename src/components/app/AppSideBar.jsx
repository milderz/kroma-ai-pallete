
import './AppSideBar.css'; // Assuming you have a CSS file for styling
import ColorPicker from './ColorPicker';

const palette = {
  // BACKGROUND
  background: {
    base: "#0F172A",
    primary: "#1E293B",
    secondary: "#243649"
  },

  // SURFACE (cards, panels, modals)
  surface: {
    base: "#1E293B",
    elevated: "#273449"
  },

  // PRIMARY COLORS (brand / UI actions)
  primary: {
    base: "#4F46E5",
    light: "#6366F1",
    dark: "#4338CA"
  },

  // ACCENT COLORS (highlights, emphasis)
  accent: {
    base: "#22D3EE",
    light: "#67E8F9",
    dark: "#06B6D4"
  },

  // TEXT COLORS
  text: {
    base: "#E5E7EB",
    primary: "#F8FAFC",
    secondary: "#CBD5E1",
    disabled: "#94A3B8"
  },

  // UTILITY / FEEDBACK COLORS
  utility: {
    success: "#10B981",
    warning: "#F59E0B",
    error:   "#EF4444",
    info:    "#3B82F6"
  },

  // NEUTRALS (optional extras)
  neutral: {
    100: "#F8FAFC",
    200: "#E2E8F0",
    300: "#CBD5E1",
    400: "#94A3B8",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A"
  }
};

const AppSideBar = () => {
    return (
        <div className="app-sidebar">
            <h3 className='app-sidebar-title'>Color tokens</h3>
            <div>
                <header>
                    <p className='app-sidebar-title-section'>Background colors</p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Base</p>
                    <ColorPicker propColor={palette.background.base} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Primary</p>
                    <ColorPicker propColor={palette.background.primary} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Secondary</p>
                    <ColorPicker propColor={palette.background.secondary} />
                    </div>
                    
                </div>
            </div>
            <div>
                <header>
                    <p className='app-sidebar-title-section'>Surface colors</p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Base</p>
                    <ColorPicker propColor={palette.surface.base} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Elevated</p>
                    <ColorPicker propColor={palette.surface.elevated} />
                    </div>
                    
                </div>
            </div>
            <div>
                <header>
                    <p className='app-sidebar-title-section'>Primary colors (brand / UI actions)</p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Base</p>
                    <ColorPicker propColor={palette.primary.base} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Light</p>
                    <ColorPicker propColor={palette.primary.light} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Dark</p>
                    <ColorPicker propColor={palette.primary.dark} />
                    </div>
                    
                </div>
            </div>
            <div>
                <header>
                    <p className='app-sidebar-title-section'>Accent colors (highlights, emphasis) </p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Base</p>
                    <ColorPicker propColor={palette.accent.base} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Dark</p>
                    <ColorPicker propColor={palette.accent.dark} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Light</p>
                    <ColorPicker propColor={palette.accent.light} />
                    </div>
                    
                </div>
            </div>
            <div>
                <header>
                    <p className='app-sidebar-title-section'>Text colors</p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Base</p>
                    <ColorPicker propColor={palette.text.base} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Primary</p>
                    <ColorPicker propColor={palette.text.primary} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Secondary</p>
                    <ColorPicker propColor={palette.text.secondary} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Disabled</p>
                    <ColorPicker propColor={palette.text.disabled} />
                    </div>
                    
                </div>
            </div>
             <div>
                <header>
                    <p className='app-sidebar-title-section'>Utility / Feedback colors</p>
                </header>
                <div className='app-sidebar-section-group'>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Success</p>
                    <ColorPicker propColor={palette.utility.success} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Warning</p>
                    <ColorPicker propColor={palette.utility.warning} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Error</p>
                    <ColorPicker propColor={palette.utility.error} />
                    </div>
                    <div className='app-sidebar-color'>
                        <p className='app-sidebar-title-color-description'>Info</p>
                    <ColorPicker propColor={palette.utility.info} />
                    </div>
                    
                </div>
            </div>
            
            
            
        </div>
    );
};

export default AppSideBar;