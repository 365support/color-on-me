import { CustomSVGProps } from '.';

export function ShoppingCartOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_701_961)">
        <path
          d="M21.08 7.00001C20.9072 6.70063 20.6598 6.45114 20.3618 6.27588C20.0639 6.10062 19.7256 6.00557 19.38 6.00001H6.58L6 3.74001C5.9414 3.52184 5.81066 3.32995 5.62908 3.19558C5.44749 3.06121 5.22576 2.99227 5 3.00001H3C2.73478 3.00001 2.48043 3.10536 2.29289 3.2929C2.10536 3.48044 2 3.73479 2 4.00001C2 4.26522 2.10536 4.51958 2.29289 4.70711C2.48043 4.89465 2.73478 5.00001 3 5.00001H4.24L7 15.26C7.0586 15.4782 7.18934 15.6701 7.37092 15.8044C7.55251 15.9388 7.77424 16.0077 8 16H17C17.1847 15.9994 17.3656 15.9478 17.5227 15.8507C17.6798 15.7536 17.8069 15.6149 17.89 15.45L21.17 8.89001C21.3122 8.59202 21.3783 8.26348 21.3626 7.93369C21.3469 7.6039 21.2498 7.28313 21.08 7.00001ZM16.38 14H8.76L7.13 8.00001H19.38L16.38 14Z"
          fill={color}
        />
        <path
          d="M7.5 21C8.32843 21 9 20.3284 9 19.5C9 18.6716 8.32843 18 7.5 18C6.67157 18 6 18.6716 6 19.5C6 20.3284 6.67157 21 7.5 21Z"
          fill={color}
        />
        <path
          d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
