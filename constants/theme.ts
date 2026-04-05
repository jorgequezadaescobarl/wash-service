export const Colors = {
  primary: '#00677d',
  primaryContainer: '#40cdf2',
  primaryFixed: '#b3ebff',
  primaryFixedDim: '#4cd6fb',
  onPrimary: '#ffffff',
  onPrimaryContainer: '#005466',
  onPrimaryFixed: '#001f27',
  onPrimaryFixedVariant: '#004e5f',
  inversePrimary: '#4cd6fb',

  secondary: '#006a63',
  secondaryContainer: '#79f7ea',
  secondaryFixed: '#79f7ea',
  secondaryFixedDim: '#5adace',
  onSecondary: '#ffffff',
  onSecondaryContainer: '#007169',
  onSecondaryFixed: '#00201d',
  onSecondaryFixedVariant: '#00504a',

  tertiary: '#006875',
  tertiaryContainer: '#7acad9',
  tertiaryFixed: '#9feffe',
  tertiaryFixedDim: '#83d3e1',
  onTertiary: '#ffffff',
  onTertiaryContainer: '#005560',
  onTertiaryFixed: '#001f24',
  onTertiaryFixedVariant: '#004f59',

  surface: '#f7f9fb',
  surfaceBright: '#f7f9fb',
  surfaceContainerLowest: '#ffffff',
  surfaceContainerLow: '#f2f4f6',
  surfaceContainer: '#eceef0',
  surfaceContainerHigh: '#e6e8ea',
  surfaceContainerHighest: '#e0e3e5',
  surfaceDim: '#d8dadc',
  surfaceVariant: '#e0e3e5',
  surfaceTint: '#00677d',
  onSurface: '#191c1e',
  onSurfaceVariant: '#3c4947',
  inverseSurface: '#2d3133',
  inverseOnSurface: '#eff1f3',

  background: '#f7f9fb',
  onBackground: '#191c1e',

  outline: '#6c7a77',
  outlineVariant: '#bbc9c7',

  error: '#ba1a1a',
  errorContainer: '#ffdad6',
  onError: '#ffffff',
  onErrorContainer: '#93000a',
} as const;

export const Typography = {
  headline: 'PlusJakartaSans_700Bold',
  headlineSemiBold: 'PlusJakartaSans_600SemiBold',
  headlineExtraBold: 'PlusJakartaSans_800ExtraBold',
  body: 'Manrope_400Regular',
  bodyMedium: 'Manrope_500Medium',
  bodySemiBold: 'Manrope_600SemiBold',
  bodyBold: 'Manrope_700Bold',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  '4xl': 32,
  section: 40,
} as const;

export const Radius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 40,
  full: 9999,
} as const;

export const Shadow = {
  ambient: {
    shadowColor: Colors.onSurface,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.05,
    shadowRadius: 32,
    elevation: 4,
  },
  subtle: {
    shadowColor: Colors.onSurface,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 16,
    elevation: 2,
  },
} as const;
