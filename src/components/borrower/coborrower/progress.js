import "./style.css";

import Ident            from '../../images/identification.svg';
import Income           from '../../images/income.svg';
import Commitment       from '../../images/commitment.svg';
import Documents        from '../../images/documents.svg';
import IdentGrey            from '../../images/identification.svg';
import IncomeGrey           from '../../images/income-black.svg';
import CommitmentGrey       from '../../images/commitment-black.svg';
import DocumentsGrey        from '../../images/documents-grey.svg';

const Progress = () => {
    return (
        <div>
            <div className="image-container-header">
                <b>Mortgage</b>
                <p><span>Loan Application Status:</span> <span>incomplete</span></p>
                <hr></hr>
                <div className="images-container">
                    <div className="progress-image">
                        <img src={Ident} alt=""/>
                        <h6>Identification</h6>
                    </div>
                    <div className="progress-image">
                        <img src={IncomeGrey} alt=""/>
                        <h6>Income</h6>
                    </div>
                    <div className="progress-image">
                        <img src={CommitmentGrey} alt=""/>
                        <h6>Commitment</h6>
                    </div>
                    <div className="progress-image">
                        <img src={DocumentsGrey} alt=""/>
                        <h6>Documents</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Progress;