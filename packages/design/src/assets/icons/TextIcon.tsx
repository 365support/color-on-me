import { CustomSVGProps } from '.';

export function TextIcon({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14.1667 0H0.833333C0.61232 0 0.400358 0.082633 0.244078 0.22972C0.0877973 0.376808 0 0.576301 0 0.784314V3.13725C0 3.34527 0.0877973 3.54476 0.244078 3.69185C0.400358 3.83894 0.61232 3.92157 0.833333 3.92157C1.05435 3.92157 1.26631 3.83894 1.42259 3.69185C1.57887 3.54476 1.66667 3.34527 1.66667 3.13725V1.56863H6.66667V11.7647H5C4.77899 11.7647 4.56702 11.8473 4.41074 11.9944C4.25446 12.1415 4.16667 12.341 4.16667 12.549C4.16667 12.757 4.25446 12.9565 4.41074 13.1036C4.56702 13.2507 4.77899 13.3333 5 13.3333H10C10.221 13.3333 10.433 13.2507 10.5893 13.1036C10.7455 12.9565 10.8333 12.757 10.8333 12.549C10.8333 12.341 10.7455 12.1415 10.5893 11.9944C10.433 11.8473 10.221 11.7647 10 11.7647H8.33333V1.56863H13.3333V3.13725C13.3333 3.34527 13.4211 3.54476 13.5774 3.69185C13.7337 3.83894 13.9457 3.92157 14.1667 3.92157C14.3877 3.92157 14.5996 3.83894 14.7559 3.69185C14.9122 3.54476 15 3.34527 15 3.13725V0.784314C15 0.576301 14.9122 0.376808 14.7559 0.22972C14.5996 0.082633 14.3877 0 14.1667 0Z"
        fill={color}
      />
    </svg>
  );
}
