import { CustomSVGProps } from '.';

export function Person({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_701_981)">
        <path
          d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11Z"
          fill={color}
        />
        <path
          d="M18.8571 20C19.1602 20 19.4509 19.8946 19.6653 19.7071C19.8796 19.5196 20 19.2652 20 19C20 17.1435 19.1571 15.363 17.6569 14.0503C16.1566 12.7375 14.1217 12 12 12C9.87827 12 7.84344 12.7375 6.34315 14.0503C4.84285 15.363 4 17.1435 4 19C4 19.2652 4.12041 19.5196 4.33474 19.7071C4.54906 19.8946 4.83975 20 5.14286 20H18.8571Z"
          fill={color}
        />
      </g>
    </svg>
  );
}
