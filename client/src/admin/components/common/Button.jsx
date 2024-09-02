import { cn } from '@/lib/utils';

const Button = ({ variant = 'filled', className, children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded-full font-semibold text-[14px] focus:outline-none transition-all duration-300 ease-in-out';
  
  const variantClasses = {
    filled: 'bg-mirage text-white border border-transparent hover:border-mirage hover:bg-white hover:text-mirage',
    outline: 'border border-mirage text-mirage hover:bg-mirage hover:text-white',
    disabled: 'bg-gray-300 text-gray-700 cursor-not-allowed'
  };

  const classes = cn(baseClasses, variantClasses[variant], className);

  return (
    <button className={classes} {...props} disabled={variant === 'disabled'}>
      {children}
    </button>
  );
};

export default Button;
