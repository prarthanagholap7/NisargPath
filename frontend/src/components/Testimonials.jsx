import React from "react";
import { Star, Quote } from "lucide-react";
import RevealAnimation from "./RevealAnimation";

const testimonials = [
  {
    id: 1,
    name: "Priya Deshmukh",
    location: "Mumbai",
    rating: 5,
    text: "The Kalsubai trek was absolutely breathtaking! Being on Maharashtra's highest peak at sunrise was magical. The guides were knowledgeable about the history and ensured everyone's safety. Highly recommend!",
    trek: "Kalsubai Peak Trek",
  },
  {
    id: 2,
    name: "Rahul Patil",
    location: "Pune",
    rating: 5,
    text: "Rajgad fort trek exceeded all expectations! The monsoon views were spectacular and the professional organization made this experience truly unforgettable. The Maratha history shared by guides was fascinating.",
    trek: "Rajgad Fort Trek",
  },
  {
    id: 3,
    name: "Sneha Kulkarni",
    location: "Nashik",
    rating: 5,
    text: "The Harishchandragad trek was challenging yet incredibly rewarding. The Konkan Kada cliff is stunning! Team's expertise and the bonfire at night made it a perfect weekend adventure.",
    trek: "Harishchandragad Trek",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealAnimation animationType="fadeInUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What <span className="text-orange-600">Trekkers Say</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real experiences from adventurers who have explored Maharashtra's
              magnificent Sahyadri trails with us
            </p>
          </div>
        </RevealAnimation>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <RevealAnimation
              key={testimonial.id}
              animationType="fadeInUp"
              delay={index * 200}
            >
              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Quote className="h-8 w-8 text-orange-600 mb-4" />

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="border-t border-orange-200 pt-4">
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.location}
                  </p>
                  <p className="text-orange-600 text-sm font-medium mt-1">
                    {testimonial.trek}
                  </p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Testimonials;
