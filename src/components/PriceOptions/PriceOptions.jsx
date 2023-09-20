import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to gym equipment",
                "Unlimited access during regular hours",
                "Locker room access",
                "Fitness assessment upon signup"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price":50,
            "features": [
                "Access to gym equipment",
                "Unlimited 24/7 access",
                "Locker room access",
                "Access to group fitness classes",
                "Personal trainer consultation (1 session/month)",
                "Discounts on fitness merchandise"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 80,
            "features": [
                "Access to gym equipment",
                "Unlimited 24/7 access",
                "Locker room access",
                "Access to group fitness classes",
                "Personal trainer consultation (2 sessions/month)",
                "Family access for up to 4 members",
                "Kids' fitness programs",
                "Nutritional counseling session (1 session/month)"
            ]
        }
    ]

    return (
        <div>
            <h2 className="text-center text-2xl font-semibold p-2"> Best Price in the Town</h2>
            <div className="grid md:grid-cols-3 gap-5 p-3">
                {
                    PriceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
                
            </div>
        </div>
    );
};

export default PriceOptions;