import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  Droplets,
  Upload,
  ScanLine,
  CheckCircle2,
  Save,
  RefreshCw,
  FileScan,
} from "lucide-react";

import "./HospitalInventoryUpdate.css";

const HospitalInventoryUpdate = () => {
  const [loading, setLoading] =
    useState(false);

  const [scanResult, setScanResult] =
    useState(null);

  const [inventory, setInventory] =
    useState({
      "A+": 12,
      "A-": 4,
      "B+": 9,
      "B-": 2,
      "AB+": 5,
      "AB-": 1,
      "O+": 16,
      "O-": 3,
    });

  const handleChange = (
    group,
    value
  ) => {
    setInventory((prev) => ({
      ...prev,

      [group]:
        Number(value) || 0,
    }));
  };

  const mockResponse = {
    confidence: true,

    updated: true,

    final: {
      "A+": 13,
      "A-": 4,
      "B+": 11,
      "B-": 2,
      "AB+": 6,
      "AB-": 1,
      "O+": 16,
      "O-": 3,
    },
  };

  const handleScan = () => {
    setLoading(true);

    setScanResult(null);

    setTimeout(() => {
      setLoading(false);

      setScanResult(mockResponse);

      setInventory(
        mockResponse.final
      );
    }, 2400);
  };

  return (
    <><Header />
    <div className="inventory-page section-sm fade-up">
      <div className="container">
        <div className="inventory-header">
          <div>
            <h2>
              Blood Inventory
            </h2>

            <p>
              Manage hospital blood
              stock
            </p>
          </div>

          <div className="header-tools">
            <button className="tool-btn">
              <RefreshCw
                size={15}
              />
              Sync
            </button>

            <button className="save-btn">
              <Save size={15} />
              Save
            </button>
          </div>
        </div>

        <div className="inventory-layout">
          {/* LEFT */}

          <div className="inventory-card card">
            <div className="card-top">
              <h3>
                Current Inventory
              </h3>

              <span className="live-tag">
                Live
              </span>
            </div>

            <div className="inventory-grid">
              {Object.entries(
                inventory
              ).map(
                ([group, value]) => (
                  <div
                    className="blood-row"
                    key={group}
                  >
                    <div className="blood-left">
                      <div className="blood-icon">
                        <Droplets />
                      </div>

                      <div>
                        <h4>
                          {group}
                        </h4>

                        <span>
                          Blood Group
                        </span>
                      </div>
                    </div>

                    <div className="blood-input">
                      <input
                        type="number"
                        value={value}
                        onChange={(
                          e
                        ) =>
                          handleChange(
                            group,
                            e.target
                              .value
                          )
                        }
                      />

                      <small>
                        Units
                      </small>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {/* RIGHT */}

          <div className="scan-card card">
            {!loading &&
              !scanResult && (
                <>
                  <div className="scan-top">
                    <div className="scan-icon">
                      <ScanLine />
                    </div>

                    <div>
                      <h3>
                        AI Scan Update
                      </h3>

                      <p>
                        Upload blood
                        inventory sheet
                      </p>
                    </div>
                  </div>

                  <label className="upload-box">
                    <Upload
                      size={18}
                    />

                    <div>
                      <h4>
                        Upload Photo
                      </h4>

                      <p>
                        JPG, PNG or
                        scanned sheet
                      </p>
                    </div>

                    <input
                      type="file"
                      hidden
                      onChange={
                        handleScan
                      }
                    />
                  </label>

                  <div className="scan-info">
                    <div>
                      • Detects inventory
                      automatically
                    </div>

                    <div>
                      • Updates stock in
                      real-time
                    </div>

                    <div>
                      • Supports handwritten
                      sheets
                    </div>
                  </div>
                </>
              )}

            {loading && (
              <div className="loading-section">
                <div className="loader-box">
                  <FileScan />
                </div>

                <h3>
                  Scanning Inventory
                </h3>

                <p>
                  AI is extracting blood
                  stock data...
                </p>

                <div className="loader-bar">
                  <div className="loader-fill"></div>
                </div>
              </div>
            )}

            {!loading &&
              scanResult && (
                <div className="result-section">
                  <div className="result-top">
                    <div className="success-icon">
                      <CheckCircle2 />
                    </div>

                    <div>
                      <h3>
                        Inventory Updated
                      </h3>

                      <p>
                        AI successfully
                        detected and updated
                        blood stock
                      </p>
                    </div>
                  </div>

                  <div className="result-summary">
                    {Object.entries(
                      scanResult.final
                    ).map(
                      (
                        [
                          group,
                          units,
                        ]
                      ) => (
                        <div
                          className="summary-row"
                          key={
                            group
                          }
                        >
                          <span>
                            {group}
                          </span>

                          <strong>
                            {units}{" "}
                            Units
                          </strong>
                        </div>
                      )
                    )}
                  </div>

                  <button
                    className="scan-again-btn"
                    onClick={() =>
                      setScanResult(
                        null
                      )
                    }
                  >
                    Scan Another
                  </button>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
    <Footer /></>
  );
};

export default HospitalInventoryUpdate;