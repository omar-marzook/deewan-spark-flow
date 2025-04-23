
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { products, type Product } from './products-data';

const ProductColumn = ({ title, items }: { title: string; items: Product[] }) => (
  <div className="flex-1 min-w-[280px]">
    <h3 className="font-display font-bold text-lg mb-4 text-deewan-dark">{title}</h3>
    <div className="space-y-3">
      {items.map((product) => (
        <motion.div
          key={product.slug}
          className="group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Link
            to={`/products/${product.slug}`}
            className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-colors"
          >
            <product.icon className="w-5 h-5 mt-1 text-deewan-primary flex-shrink-0" />
            <div className="ml-3">
              <h4 className="font-display font-medium text-deewan-dark group-hover:text-deewan-primary transition-colors">
                {product.name}
              </h4>
              <p className="text-sm text-deewan-dark/70 font-normal">
                {product.description}
              </p>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProductsMegaMenu = () => {
  return (
    <div className="absolute left-0 w-full top-full pt-2">
      <div className="glass mx-4 rounded-xl overflow-hidden border border-white/20 w-fit">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.2 }}
          className="container mx-auto p-6"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <ProductColumn title="Applications" items={products.applications} />
            <div className="hidden md:block w-px bg-white/10" />
            <ProductColumn title="Communication APIs" items={products.communicationAPIs} />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsMegaMenu;
