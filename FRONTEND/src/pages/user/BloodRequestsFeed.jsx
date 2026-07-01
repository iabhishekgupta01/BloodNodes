import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './BloodRequestsFeed.css';

import { formatTimeAgo } from '../../utils/timeFormatter.js';
import { useAuth } from '../../context/AuthContext.jsx';
import { getAllBloodRequests, acceptBloodRequest, cancelBloodRequest } from '../../api/bloodRequest.js';

const BloodRequestsFeed = () => {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const { id: userId } = useAuth(); 
  const [maxDistance, setMaxDistance] = useState('all');

  useEffect(() => {
    const fetchBloodRequests = async () => {
      try {
        const response = await getAllBloodRequests();
        setRequests(response);
      } catch (error) {
        console.error('Error fetching blood requests:', error);
      }
    };
    fetchBloodRequests();
  }, []);

  const filteredRequests = requests.filter(req => 
    maxDistance === 'all' || req.distanceValue <= parseFloat(maxDistance)
  );

  // Check if the user has ALREADY accepted any request in the current list
  const hasActiveAcceptance = requests.some(req => 
    req.acceptedBy && Array.isArray(req.acceptedBy) && req.acceptedBy.some(u => {
      const uId = typeof u === 'object' && u !== null ? u._id : u;
      return String(uId) === String(userId);
    })
  );

  const handleAction = async (e, bid, type) => {
    e.stopPropagation(); 
    try {
      if (type === 'Accepted') {
        setRequests(prev => prev.map(req => 
          req._id === bid ? { ...req, acceptedBy: [...(req.acceptedBy || []), userId] } : req
        ));
        await acceptBloodRequest(bid, userId);
        
      } else if (type === 'Passed') {
        setRequests(prev => prev.filter(req => req._id !== bid));
        
      } else if (type === 'Cancel') {
        setRequests(prev => prev.map(req => 
          req._id === bid ? { 
            ...req, 
            acceptedBy: (req.acceptedBy || []).filter(u => {
              const uId = typeof u === 'object' && u !== null ? u._id : u;
              return String(uId) !== String(userId);
            }) 
          } : req
        ));
        await cancelBloodRequest(bid, userId);
      }
    } catch (error) {
      console.error('Error handling action:', error);
    } 
  };

  return (
    <div className="page-content">
      <div className="feed-header-modern">
        <div className="header-titles">
          <h2>BloodNode Radar</h2>
          <p style={{ color: 'var(--color-danger, #C1121F)', fontSize: '0.9rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px', margin: 0 }}>
            Live requests in your radius
          </p>
        </div>
        
        <select 
          className="distance-filter glass-panel" 
          value={maxDistance} 
          onChange={(e) => setMaxDistance(e.target.value)}
        >
          <option value="all">Any Distance</option>
          <option value="3">Under 3 km</option>
          <option value="5">Under 5 km</option>
          <option value="10">Under 10 km</option>
        </select>
      </div>

      <div className="log-list">
        {filteredRequests.length === 0 ? (
          <div className="empty-radar glass-panel">No active pings.</div>
        ) : (
          filteredRequests.map((req) => {
            const isAccepted = req.acceptedBy && Array.isArray(req.acceptedBy) && req.acceptedBy.some(u => {
              const uId = typeof u === 'object' && u !== null ? u._id : u;
              return String(uId) === String(userId);
            });
            
            const currentAcceptedCount = req.acceptedBy?.length || 0;
            const totalFulfilled = req.unitsFulfilled !== undefined ? req.unitsFulfilled : currentAcceptedCount;
            const isFulfilled = totalFulfilled >= req.unitsNeeded;
            
            // Disable if request is fulfilled OR if the user has accepted a different request
            const isDisabled = isFulfilled || (hasActiveAcceptance && !isAccepted);

            return (
              <div 
                key={req._id} 
                className={`log-item glass-panel ${isAccepted ? 'accepted-active' : ''} ${isDisabled ? 'disabled-item' : ''}`}
                onClick={() => !isDisabled && navigate(`/blood-requests/${req._id}`)}
              >
                <div className="bg-sticker">{req.bloodGroup}</div>

                <div className="log-info">
                  <div className="log-info-header">
                    <h4 className="log-title">
                      {req.hospital?.hospitalName || "Hospital"} 
                      {isAccepted && <span className="accepted-badge">ACCEPTED</span>}
                      {!isAccepted && isFulfilled && <span className="accepted-badge" style={{background: '#6B7280'}}>FULFILLED</span>}
                    </h4>
                    <span className="log-time">{formatTimeAgo(req.createdAt)}</span>
                  </div>
                  
                  <div className="log-meta">
                    <span className="meta-item text-danger">
                      {Math.max(0, req.unitsNeeded - totalFulfilled)} Units Needed
                    </span>
                    <span className="meta-divider">•</span>
                    <span className="meta-item">{req.distanceValue || 'N/A'} km</span>
                  </div>
                </div>

                <div className="log-actions">
                  {isAccepted ? (
                    <button 
                      className="action-icon cancel-icon" 
                      onClick={(e) => handleAction(e, req._id, 'Cancel')}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                    </button>
                  ) : (
                    <>
                      <button 
                        className="action-icon accept-icon" 
                        onClick={(e) => handleAction(e, req._id, 'Accepted')}
                        disabled={isDisabled}
                        style={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </button>
                      <button 
                        className="action-icon reject-icon" 
                        onClick={(e) => handleAction(e, req._id, 'Passed')}
                        disabled={isDisabled}
                        style={isDisabled ? { opacity: 0.5, cursor: 'not-allowed' } : {}}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                      </button>
                    </>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default BloodRequestsFeed;