import { calculateInvestmentResults, formatter } from "../util/investment.js";

export default function ResultTable({ investmentData }) {
    let result = [];
    result = calculateInvestmentResults({
        initialInvestment: investmentData['Initial Investment'],
        annualInvestment: investmentData['Annual Investment'],
        expectedReturn: investmentData['Expected Result'],
        duration: investmentData['Duration'],
    });

    const initInv = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment;

    function generateResultTable(resultData) {
        return (
            <table id="result">
                <thead>
                    <tr>
                        <th>
                            Year
                        </th>
                        <th>
                            Investment Value
                        </th>
                        <th>
                            Interest (Year)
                        </th>
                        <th>
                            Total Interest
                        </th>
                        <th>
                            Invested Capital
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {resultData.map((row) => {
                        const totalInv = row.valueEndOfYear - row.annualInvestment * row.year - initInv;
                        const totalAmmInv = row.valueEndOfYear - initInv;

                        return (

                            <tr key={row.year}>
                                <td>{row.year}</td>
                                <td>{formatter.format(row.annualInvestment)}</td>
                                <td>{formatter.format(row.interest)}</td>
                                <td>{formatter.format(totalInv)}</td>
                                <td>{formatter.format(totalAmmInv)}</td>
                            </tr>
                        );
                    }
                    )}
                </tbody>
            </table>
        );
    }

    return (
        <>
            {generateResultTable(result)}
        </>
    );
}