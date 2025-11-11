import 'flatpickr/dist/themes/light.css';

export default function MockLocalizedFlatpicker() {
    return (
        <>
            <input data-testid="datepicker" className="flatpickr-input" value="" type="text" readOnly />
            <div className="flatpickr-calendar animate inline">
                <div className="flatpickr-months">
                    <span className="flatpickr-prev-month flatpickr-disabled">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                            <g></g>
                            <path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path>
                        </svg>
                    </span>
                    <div className="flatpickr-month">
                        <div className="flatpickr-current-month">
                            <select className="flatpickr-monthDropdown-months" aria-label="Month">
                                <option className="flatpickr-monthDropdown-month" value="0">
                                    January
                                </option>
                            </select>
                            <div className="numInputWrapper">
                                <input
                                    className="numInput cur-year"
                                    type="number"
                                    aria-label="Year"
                                    min="2025"
                                    max="2025"
                                    disabled
                                />
                                <span className="arrowUp"></span>
                                <span className="arrowDown"></span>
                            </div>
                        </div>
                    </div>
                    <span className="flatpickr-next-month flatpickr-disabled">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17">
                            <g></g>
                            <path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path>
                        </svg>
                    </span>
                </div>
                <div className="flatpickr-innerContainer">
                    <div className="flatpickr-rContainer">
                        <div className="flatpickr-weekdays">
                            <div className="flatpickr-weekdaycontainer">
                                <span className="flatpickr-weekday">Sun</span>
                                <span className="flatpickr-weekday">Mon</span>
                                <span className="flatpickr-weekday">Tue</span>
                                <span className="flatpickr-weekday">Wed</span>
                                <span className="flatpickr-weekday">Thu</span>
                                <span className="flatpickr-weekday">Fri</span>
                                <span className="flatpickr-weekday">Sat</span>
                            </div>
                        </div>
                        <div className="flatpickr-days">
                            <div className="dayContainer">
                                <span
                                    className="flatpickr-day prevMonthDay flatpickr-disabled"
                                    aria-label="December 29, 2024"
                                >
                                    29
                                </span>
                                <span
                                    className="flatpickr-day prevMonthDay flatpickr-disabled"
                                    aria-label="December 30, 2024"
                                >
                                    30
                                </span>
                                <span
                                    className="flatpickr-day prevMonthDay flatpickr-disabled"
                                    aria-label="December 31, 2024"
                                >
                                    31
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 1, 2025">
                                    1
                                </span>
                                <span className="flatpickr-day selected" aria-label="January 2, 2025">
                                    2
                                </span>
                                <span className="flatpickr-day" aria-label="January 3, 2025">
                                    3
                                </span>
                                <span className="flatpickr-day" aria-label="January 4, 2025">
                                    4
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 5, 2025">
                                    5
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 6, 2025">
                                    6
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 7, 2025">
                                    7
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 8, 2025">
                                    8
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 9, 2025">
                                    9
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 10, 2025">
                                    10
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 11, 2025">
                                    11
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 12, 2025">
                                    12
                                </span>
                                <span
                                    className="flatpickr-day today flatpickr-disabled"
                                    aria-label="January 13, 2025"
                                    aria-current="date"
                                >
                                    13
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 14, 2025">
                                    14
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 15, 2025">
                                    15
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 16, 2025">
                                    16
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 17, 2025">
                                    17
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 18, 2025">
                                    18
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 19, 2025">
                                    19
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 20, 2025">
                                    20
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 21, 2025">
                                    21
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 22, 2025">
                                    22
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 23, 2025">
                                    23
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 24, 2025">
                                    24
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 25, 2025">
                                    25
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 26, 2025">
                                    26
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 27, 2025">
                                    27
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 28, 2025">
                                    28
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 29, 2025">
                                    29
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 30, 2025">
                                    30
                                </span>
                                <span className="flatpickr-day flatpickr-disabled" aria-label="January 31, 2025">
                                    31
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 1, 2025"
                                >
                                    1
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 2, 2025"
                                >
                                    2
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 3, 2025"
                                >
                                    3
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 4, 2025"
                                >
                                    4
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 5, 2025"
                                >
                                    5
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 6, 2025"
                                >
                                    6
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 7, 2025"
                                >
                                    7
                                </span>
                                <span
                                    className="flatpickr-day nextMonthDay flatpickr-disabled"
                                    aria-label="February 8, 2025"
                                >
                                    8
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
