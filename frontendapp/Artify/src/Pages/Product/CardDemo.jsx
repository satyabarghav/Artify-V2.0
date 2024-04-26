/**
 * v0 by Vercel.
 * @see https://v0.dev/t/VsrYwvaldmb
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PropTypes from "prop-types";
export default function CardDemo(props) {
  return (
    <Card className="w-full max-w-xs rounded-xl border width">
      <div className="grid gap-4 p-4">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-xl">
          <img
            alt="Product"
            className="aspect-[4/5] object-cover border w-full"
            height="500"
            src="https://images.unsplash.com/photo-1706169599121-4182eb12fbef?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            width="400"
          />
        </div>
        <div className="grid gap-1.5">
          <h3 className="font-semibold text-sm md:text-base">
            {props.title}
          </h3>
          <p className="font-semibold text-sm md:text-base">{props.price}</p>
          <p className="text-sm md:text-base text-muted">
            {props.description}
          </p>
        </div>
        <Button size="sm">Add to cart</Button>
      </div>
    </Card>
  );
}

CardDemo.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

