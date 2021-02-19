import React,{useState, useMemo} from "react";
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import PropertyTable from './table/PropertyTable'
import EditForm from './edit/EditForm'
import MOCK_DATA from '../../MOCK_DATA.json'


const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : '#ebf2dd'
  }
};

Modal.setAppElement('#root');

function PropertyManager() {

  //const data = useMemo(() => MOCK_DATA, [])
  const [data, setData] = useState(MOCK_DATA)

  const [selectedItem, setSelectedItem] = useState({});

  const [editEnabled, setEditEnabled] = useState(false);

  var subtitle;

  const [modalIsOpen,setIsOpen] = React.useState(false);

  function afterOpenModal() {
  }

  function openModal() { setIsOpen(true); }
  function closeModal(){ setIsOpen(false); }

  function editHandler() { setIsOpen(true) }

  function saveHandler() {
      console.log("PropertyManager.saveHandler")
      console.log("Saving "+JSON.stringify(selectedItem))
      setData(data.map(d=>({...d})));
      setIsOpen(false)
  }

  function cancelHandler() {
      console.log("PropertyManager.cancelHandler")
      setIsOpen(false)
  }

  function selectionHandler(items) {
      setEditEnabled(items.length == 1)
      setSelectedItem(items[0])
  }
  return (
    <div id="property-manager">
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
              <EditForm
                onSave={() => saveHandler()}
                onCancel={() => cancelHandler()}
                item={selectedItem}
              />
          </Modal>
          <div className="mainContent">
              <div>
                <button disabled={!editEnabled} onClick={() => editHandler()}>Edit</button>
              </div>
              <PropertyTable tableData={data} setSelectedRows={selectionHandler} />
          </div>
    </div>
  );
}

ReactDOM.render(<PropertyManager />, document.getElementById('root'));

export default PropertyManager;
