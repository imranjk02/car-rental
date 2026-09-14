document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const nav = document.querySelector(".navbar nav");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", () => {
            nav.classList.toggle("show");
        });
    }

    const cars = {

        fortuner: {
            name: "Toyota Fortuner",
            image: "images/fortuner.jpg",
            price: "₹4,500 / day",
            fuel: "Diesel",
            seats: "7 Seats",
            transmission: "Automatic",
            type: "SUV",
            year: "2025",
            mileage: "14 km/l",
            features: [
                "AC",
                "Bluetooth",
                "GPS Navigation",
                "Rear Camera",
                "Cruise Control",
                "USB Charging"
            ]
        },

        bmw: {
            name: "BMW 3 Series",
            image: "images/bmw.jpg",
            price: "₹6,500 / day",
            fuel: "Petrol",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Sedan",
            year: "2025",
            mileage: "18 km/l",
            features: [
                "AC",
                "Bluetooth",
                "GPS Navigation",
                "Leather Seats",
                "Sunroof",
                "Parking Sensors"
            ]
        },

        mercedes: {
            name: "Mercedes C Class",
            image: "images/mercedes.jpg",
            price: "₹7,500 / day",
            fuel: "Petrol",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Sedan",
            year: "2025",
            mileage: "16 km/l",
            features: [
                "AC",
                "Bluetooth",
                "Premium Audio",
                "Leather Seats",
                "Sunroof",
                "Rear Camera"
            ]
        },

        creta: {
            name: "Hyundai Creta",
            image: "images/creta.jpg",
            price: "₹2,800 / day",
            fuel: "Petrol",
            seats: "5 Seats",
            transmission: "Manual",
            type: "SUV",
            year: "2024",
            mileage: "17 km/l",
            features: [
                "AC",
                "Bluetooth",
                "GPS",
                "Rear Camera",
                "USB Charging",
                "Cruise Control"
            ]
        },

        audi: {
            name: "Audi A6",
            image: "images/audi.jpg",
            price: "₹7,000 / day",
            fuel: "Petrol",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Sedan",
            year: "2025",
            mileage: "15 km/l",
            features: [
                "AC",
                "Bluetooth",
                "Premium Audio",
                "Leather Seats",
                "GPS",
                "Sunroof"
            ]
        },

        camry: {
            name: "Toyota Camry",
            image: "images/camry.jpg",
            price: "₹5,000 / day",
            fuel: "Hybrid",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Sedan",
            year: "2025",
            mileage: "22 km/l",
            features: [
                "AC",
                "Hybrid Engine",
                "Bluetooth",
                "GPS",
                "Rear Camera",
                "Cruise Control"
            ]
        },

        "bmw-x5": {
            name: "BMW X5",
            image: "images/bmw-x5.jpg",
            price: "₹8,500 / day",
            fuel: "Diesel",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Luxury SUV",
            year: "2025",
            mileage: "13 km/l",
            features: [
                "AC",
                "Leather Seats",
                "Premium Audio",
                "GPS",
                "Sunroof",
                "Parking Sensors"
            ]
        },

        "mercedes-glc": {
            name: "Mercedes GLC",
            image: "images/mercedes-glc.jpg",
            price: "₹8,000 / day",
            fuel: "Diesel",
            seats: "5 Seats",
            transmission: "Automatic",
            type: "Luxury SUV",
            year: "2025",
            mileage: "14 km/l",
            features: [
                "AC",
                "Bluetooth",
                "Leather Seats",
                "GPS",
                "Rear Camera",
                "Cruise Control"
            ]
        }

    };

    const params = new URLSearchParams(window.location.search);
    const carId = params.get("car");

    if (carId && cars[carId]) {

        const car = cars[carId];

        const carImage = document.getElementById("carImage");
        const carName = document.getElementById("carName");
        const carPrice = document.getElementById("carPrice");
        const carFuel = document.getElementById("carFuel");
        const carSeats = document.getElementById("carSeats");
        const carTransmission =
            document.getElementById("carTransmission");
        const carType = document.getElementById("carType");
        const carYear = document.getElementById("carYear");
        const carMileage = document.getElementById("carMileage");
        const carFeatures =
            document.getElementById("carFeatures");

        if (carImage) {
            carImage.src = car.image;
            carImage.alt = car.name;
        }

        if (carName)
            carName.textContent = car.name;

        if (carPrice)
            carPrice.textContent = car.price;

        if (carFuel)
            carFuel.textContent = car.fuel;

        if (carSeats)
            carSeats.textContent = car.seats;

        if (carTransmission)
            carTransmission.textContent = car.transmission;

        if (carType)
            carType.textContent = car.type;

        if (carYear)
            carYear.textContent = car.year;

        if (carMileage)
            carMileage.textContent = car.mileage;

        if (carFeatures) {

            carFeatures.innerHTML = car.features
                .map(feature =>
                    `<span>
                        <i class="fas fa-check"></i>
                        ${feature}
                    </span>`
                )
                .join("");
        }

        document.title = `${car.name} - DriveEase`;
    }

    const searchInput =
        document.getElementById("searchInput");

    const brandFilter =
        document.getElementById("brandFilter");

    const priceFilter =
        document.getElementById("priceFilter");

    const fuelFilter =
        document.getElementById("fuelFilter");

    const transmissionFilter =
        document.getElementById("transmissionFilter");

    const filterBtn =
        document.getElementById("filterBtn");

    const carGrid =
        document.getElementById("carGrid");

    const resultCount =
        document.getElementById("resultCount");

    const noResults =
        document.getElementById("noResults");


    function filterCars() {

        if (!carGrid) return;

        const cards =
            carGrid.querySelectorAll(".car-card");

        const search = searchInput
            ? searchInput.value.toLowerCase().trim()
            : "";

        const brand =
            brandFilter ? brandFilter.value : "all";

        const price =
            priceFilter ? priceFilter.value : "all";

        const fuel =
            fuelFilter ? fuelFilter.value : "all";

        const transmission =
            transmissionFilter
                ? transmissionFilter.value
                : "all";

        let count = 0;


        cards.forEach(card => {

            const name =
                card.dataset.name.toLowerCase();

            const cardBrand =
                card.dataset.brand;

            const cardPrice =
                Number(card.dataset.price);

            const cardFuel =
                card.dataset.fuel;

            const cardTransmission =
                card.dataset.transmission;


            const matchesSearch =
                name.includes(search);

            const matchesBrand =
                brand === "all" ||
                cardBrand === brand;

            const matchesPrice =
                price === "all" ||
                cardPrice <= Number(price);

            const matchesFuel =
                fuel === "all" ||
                cardFuel === fuel;

            const matchesTransmission =
                transmission === "all" ||
                cardTransmission === transmission;


            const matches =
                matchesSearch &&
                matchesBrand &&
                matchesPrice &&
                matchesFuel &&
                matchesTransmission;


            card.style.display =
                matches ? "" : "none";


            if (matches) {
                count++;
            }

        });


        if (resultCount) {
            resultCount.textContent = count;
        }

        if (noResults) {
            noResults.style.display =
                count === 0 ? "block" : "none";
        }

    }


    if (searchInput) {
        searchInput.addEventListener(
            "input",
            filterCars
        );
    }

    if (brandFilter) {
        brandFilter.addEventListener(
            "change",
            filterCars
        );
    }

    if (priceFilter) {
        priceFilter.addEventListener(
            "change",
            filterCars
        );
    }

    if (fuelFilter) {
        fuelFilter.addEventListener(
            "change",
            filterCars
        );
    }

    if (transmissionFilter) {
        transmissionFilter.addEventListener(
            "change",
            filterCars
        );
    }

    if (filterBtn) {
        filterBtn.addEventListener(
            "click",
            filterCars
        );
    }

    const bookingForm =
        document.getElementById("bookingForm");

    if (bookingForm) {

        bookingForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                const pickup =
                    document.getElementById(
                        "pickupDate"
                    ).value;

                const returnDate =
                    document.getElementById(
                        "returnDate"
                    ).value;


                if (
                    pickup &&
                    returnDate &&
                    new Date(returnDate) <
                    new Date(pickup)
                ) {

                    alert(
                        "Return date must be after pickup date."
                    );

                    return;
                }


                alert(
                    "Booking request submitted successfully!"
                );

                bookingForm.reset();

            }
        );

    }

    const contactForm =
        document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                alert(
                    "Thank you! Your message has been sent successfully."
                );

                contactForm.reset();

            }
        );

    }

});